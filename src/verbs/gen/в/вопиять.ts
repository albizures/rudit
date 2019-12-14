import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вопиять: PerfectVerb = {
  name: Word('вопиять', 4),
  singular1stPerson: Word('вопию', 4),
  singular2ndPerson: Word('вопиёшь', 4),
  singular3rdPerson: Word('вопиёт', 4),
  plural1stPerson: Word('вопиём', 4),
  plural2ndPerson: Word('вопиёте', 4),
  plural3rdPerson: Word('вопиют', 4),
  masculinePast: Word('вопиял', 4),
  femininePast: Word('вопияла', 4),
  neuterPast: Word('вопияло', 4),
  pluralPast: Word('вопияли', 4),
  imperativeInformal: Word('вопий', 1),
  imperativeFormal: Word('вопийте', 1),
  imperfect: [],
};

perfectVerbs.set(вопиять.name.text, вопиять);

export { вопиять };