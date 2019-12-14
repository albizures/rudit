import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вскидываться: PerfectVerb = {
  name: Word('вскидываться', 3),
  singular1stPerson: Word('вскидываюсь', 3),
  singular2ndPerson: Word('вскидываешься', 3),
  singular3rdPerson: Word('вскидывается', 3),
  plural1stPerson: Word('вскидываемся', 3),
  plural2ndPerson: Word('вскидываетесь', 3),
  plural3rdPerson: Word('вскидываются', 3),
  masculinePast: Word('вскидывался', 3),
  femininePast: Word('вскидывалась', 3),
  neuterPast: Word('вскидывалось', 3),
  pluralPast: Word('вскидывались', 3),
  imperativeInformal: Word('вскидывайся', 3),
  imperativeFormal: Word('вскидывайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(вскидываться.name.text, вскидываться);

export { вскидываться };