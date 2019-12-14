import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const упросить: PerfectVerb = {
  name: Word('упросить', 5),
  singular1stPerson: Word('упрошу', 5),
  singular2ndPerson: Word('упросишь', 3),
  singular3rdPerson: Word('упросит', 3),
  plural1stPerson: Word('упросим', 3),
  plural2ndPerson: Word('упросите', 3),
  plural3rdPerson: Word('упросят', 3),
  masculinePast: Word('упросил', 5),
  femininePast: Word('упросила', 5),
  neuterPast: Word('упросило', 5),
  pluralPast: Word('упросили', 5),
  imperativeInformal: Word('упроси', 5),
  imperativeFormal: Word('упросите', 5),
  imperfect: [],
};

perfectVerbs.set(упросить.name.text, упросить);

export { упросить };