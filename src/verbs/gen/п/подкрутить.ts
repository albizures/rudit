import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подкрутить: PerfectVerb = {
  name: Word('подкрутить', 7),
  singular1stPerson: Word('подкручу', 7),
  singular2ndPerson: Word('подкрутишь', 5),
  singular3rdPerson: Word('подкрутит', 5),
  plural1stPerson: Word('подкрутим', 5),
  plural2ndPerson: Word('подкрутите', 5),
  plural3rdPerson: Word('подкрутят', 5),
  masculinePast: Word('подкрутил', 7),
  femininePast: Word('подкрутила', 7),
  neuterPast: Word('подкрутило', 7),
  pluralPast: Word('подкрутили', 7),
  imperativeInformal: Word('подкрути', 7),
  imperativeFormal: Word('подкрутите', 7),
  imperfect: [],
};

perfectVerbs.set(подкрутить.name.text, подкрутить);

export { подкрутить };