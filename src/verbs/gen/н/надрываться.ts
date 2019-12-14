import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const надрываться: PerfectVerb = {
  name: Word('надрываться', 6),
  singular1stPerson: Word('надрываюсь', 6),
  singular2ndPerson: Word('надрываешься', 6),
  singular3rdPerson: Word('надрывается', 6),
  plural1stPerson: Word('надрываемся', 6),
  plural2ndPerson: Word('надрываетесь', 6),
  plural3rdPerson: Word('надрываются', 6),
  masculinePast: Word('надрывался', 6),
  femininePast: Word('надрывалась', 6),
  neuterPast: Word('надрывалось', 6),
  pluralPast: Word('надрывались', 6),
  imperativeInformal: Word('надрывайся', 6),
  imperativeFormal: Word('надрывайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(надрываться.name.text, надрываться);

export { надрываться };