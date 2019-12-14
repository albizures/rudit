import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const развлечь: PerfectVerb = {
  name: Word('развлечь', 5),
  singular1stPerson: Word('развлеку', 7),
  singular2ndPerson: Word('развлечёшь', 7),
  singular3rdPerson: Word('развлечёт', 7),
  plural1stPerson: Word('развлечём', 7),
  plural2ndPerson: Word('развлечёте', 7),
  plural3rdPerson: Word('развлекут', 7),
  masculinePast: Word('развлёк', 5),
  femininePast: Word('развлекла', 8),
  neuterPast: Word('развлекло', 8),
  pluralPast: Word('развлекли', 8),
  imperativeInformal: Word('развлеки', 7),
  imperativeFormal: Word('развлеките', 7),
  imperfect: ['развлекать'],
};

perfectVerbs.set(развлечь.name.text, развлечь);

export { развлечь };