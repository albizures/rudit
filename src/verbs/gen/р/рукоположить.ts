import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const рукоположить: PerfectVerb = {
  name: Word('рукоположить', 9),
  singular1stPerson: Word('рукоположу', 9),
  singular2ndPerson: Word('рукоположишь', 9),
  singular3rdPerson: Word('рукоположит', 9),
  plural1stPerson: Word('рукоположим', 9),
  plural2ndPerson: Word('рукоположите', 9),
  plural3rdPerson: Word('рукоположат', 9),
  masculinePast: Word('рукоположил', 9),
  femininePast: Word('рукоположила', 9),
  neuterPast: Word('рукоположило', 9),
  pluralPast: Word('рукоположили', 9),
  imperativeInformal: Word('рукоположи', 9),
  imperativeFormal: Word('рукоположите', 9),
  imperfect: [],
};

perfectVerbs.set(рукоположить.name.text, рукоположить);

export { рукоположить };