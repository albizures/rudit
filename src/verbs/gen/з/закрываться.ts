import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const закрываться: PerfectVerb = {
  name: Word('закрываться', 6),
  singular1stPerson: Word('закрываюсь', 6),
  singular2ndPerson: Word('закрываешься', 6),
  singular3rdPerson: Word('закрывается', 6),
  plural1stPerson: Word('закрываемся', 6),
  plural2ndPerson: Word('закрываетесь', 6),
  plural3rdPerson: Word('закрываются', 6),
  masculinePast: Word('закрывался', 6),
  femininePast: Word('закрывалась', 6),
  neuterPast: Word('закрывалось', 6),
  pluralPast: Word('закрывались', 6),
  imperativeInformal: Word('закрывайся', 6),
  imperativeFormal: Word('закрывайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(закрываться.name.text, закрываться);

export { закрываться };