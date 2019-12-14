import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вопросить: PerfectVerb = {
  name: Word('вопросить', 6),
  singular1stPerson: Word('вопрошу', 6),
  singular2ndPerson: Word('вопросишь', 6),
  singular3rdPerson: Word('вопросит', 6),
  plural1stPerson: Word('вопросим', 6),
  plural2ndPerson: Word('вопросите', 6),
  plural3rdPerson: Word('вопросят', 6),
  masculinePast: Word('вопросил', 6),
  femininePast: Word('вопросила', 6),
  neuterPast: Word('вопросило', 6),
  pluralPast: Word('вопросили', 6),
  imperativeInformal: Word('вопроси', 6),
  imperativeFormal: Word('вопросите', 6),
  imperfect: [],
};

perfectVerbs.set(вопросить.name.text, вопросить);

export { вопросить };