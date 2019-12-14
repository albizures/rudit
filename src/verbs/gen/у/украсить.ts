import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const украсить: PerfectVerb = {
  name: Word('украсить', 3),
  singular1stPerson: Word('украшу', 3),
  singular2ndPerson: Word('украсишь', 3),
  singular3rdPerson: Word('украсит', 3),
  plural1stPerson: Word('украсим', 3),
  plural2ndPerson: Word('украсите', 3),
  plural3rdPerson: Word('украсят', 3),
  masculinePast: Word('украсил', 3),
  femininePast: Word('украсила', 3),
  neuterPast: Word('украсило', 3),
  pluralPast: Word('украсили', 3),
  imperativeInformal: Word('укрась', 3),
  imperativeFormal: Word('украсьте', 3),
  imperfect: ['украшать'],
};

perfectVerbs.set(украсить.name.text, украсить);

export { украсить };