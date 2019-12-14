import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const створить: PerfectVerb = {
  name: Word('створить', 5),
  singular1stPerson: Word('створю', 5),
  singular2ndPerson: Word('створишь', 5),
  singular3rdPerson: Word('створит', 5),
  plural1stPerson: Word('створим', 5),
  plural2ndPerson: Word('створите', 5),
  plural3rdPerson: Word('створят', 5),
  masculinePast: Word('створил', 5),
  femininePast: Word('створила', 5),
  neuterPast: Word('створило', 5),
  pluralPast: Word('створили', 5),
  imperativeInformal: Word('створи', 5),
  imperativeFormal: Word('створите', 5),
  imperfect: [],
};

perfectVerbs.set(створить.name.text, створить);

export { створить };