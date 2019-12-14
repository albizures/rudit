import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вопить: PerfectVerb = {
  name: Word('вопить', 3),
  singular1stPerson: Word('воплю', 4),
  singular2ndPerson: Word('вопишь', 3),
  singular3rdPerson: Word('вопит', 3),
  plural1stPerson: Word('вопим', 3),
  plural2ndPerson: Word('вопите', 3),
  plural3rdPerson: Word('вопят', 3),
  masculinePast: Word('вопил', 3),
  femininePast: Word('вопила', 3),
  neuterPast: Word('вопило', 3),
  pluralPast: Word('вопили', 3),
  imperativeInformal: Word('вопи', 3),
  imperativeFormal: Word('вопите', 3),
  imperfect: [],
};

perfectVerbs.set(вопить.name.text, вопить);

export { вопить };