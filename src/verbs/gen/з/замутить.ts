import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const замутить: PerfectVerb = {
  name: Word('замутить', 5),
  singular1stPerson: Word('замучу', 5),
  singular2ndPerson: Word('замутишь', 5),
  singular3rdPerson: Word('замутит', 5),
  plural1stPerson: Word('замутим', 5),
  plural2ndPerson: Word('замутите', 5),
  plural3rdPerson: Word('замутят', 5),
  masculinePast: Word('замутил', 5),
  femininePast: Word('замутила', 5),
  neuterPast: Word('замутило', 5),
  pluralPast: Word('замутили', 5),
  imperativeInformal: Word('замути', 5),
  imperativeFormal: Word('замутите', 5),
  imperfect: [],
};

perfectVerbs.set(замутить.name.text, замутить);

export { замутить };