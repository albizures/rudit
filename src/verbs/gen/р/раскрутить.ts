import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const раскрутить: PerfectVerb = {
  name: Word('раскрутить', 7),
  singular1stPerson: Word('раскручу', 7),
  singular2ndPerson: Word('раскрутишь', 5),
  singular3rdPerson: Word('раскрутит', 5),
  plural1stPerson: Word('раскрутим', 5),
  plural2ndPerson: Word('раскрутите', 5),
  plural3rdPerson: Word('раскрутят', 5),
  masculinePast: Word('раскрутил', 7),
  femininePast: Word('раскрутила', 7),
  neuterPast: Word('раскрутило', 7),
  pluralPast: Word('раскрутили', 7),
  imperativeInformal: Word('раскрути', 7),
  imperativeFormal: Word('раскрутите', 7),
  imperfect: ['раскручивать'],
};

perfectVerbs.set(раскрутить.name.text, раскрутить);

export { раскрутить };