import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const закатываться: PerfectVerb = {
  name: Word('закатываться', 3),
  singular1stPerson: Word('закатываюсь', 3),
  singular2ndPerson: Word('закатываешься', 3),
  singular3rdPerson: Word('закатывается', 3),
  plural1stPerson: Word('закатываемся', 3),
  plural2ndPerson: Word('закатываетесь', 3),
  plural3rdPerson: Word('закатываются', 3),
  masculinePast: Word('закатывался', 3),
  femininePast: Word('закатывалась', 3),
  neuterPast: Word('закатывалось', 3),
  pluralPast: Word('закатывались', 3),
  imperativeInformal: Word('закатывайся', 3),
  imperativeFormal: Word('закатывайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(закатываться.name.text, закатываться);

export { закатываться };