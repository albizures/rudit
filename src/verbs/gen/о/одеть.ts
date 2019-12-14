import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const одеть: PerfectVerb = {
  name: Word('одеть', 2),
  singular1stPerson: Word('одену', 2),
  singular2ndPerson: Word('оденешь', 2),
  singular3rdPerson: Word('оденет', 2),
  plural1stPerson: Word('оденем', 2),
  plural2ndPerson: Word('оденете', 2),
  plural3rdPerson: Word('оденут', 2),
  masculinePast: Word('одел', 2),
  femininePast: Word('одела', 2),
  neuterPast: Word('одело', 2),
  pluralPast: Word('одели', 2),
  imperativeInformal: Word('одень', 2),
  imperativeFormal: Word('оденьте', 2),
  imperfect: ['одевать'],
};

perfectVerbs.set(одеть.name.text, одеть);

export { одеть };