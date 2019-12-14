import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подмётывать: PerfectVerb = {
  name: Word('подмётывать', 8),
  singular1stPerson: Word('', -1),
  singular2ndPerson: Word('', -1),
  singular3rdPerson: Word('', -1),
  plural1stPerson: Word('', -1),
  plural2ndPerson: Word('', -1),
  plural3rdPerson: Word('', -1),
  masculinePast: Word('', -1),
  femininePast: Word('', -1),
  neuterPast: Word('', -1),
  pluralPast: Word('', -1),
  imperativeInformal: Word('', -1),
  imperativeFormal: Word('', -1),
  imperfect: ['подметать'],
};

perfectVerbs.set(подмётывать.name.text, подмётывать);

export { подмётывать };