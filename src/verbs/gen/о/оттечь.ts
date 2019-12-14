import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оттечь: PerfectVerb = {
  name: Word('оттечь', 3),
  singular1stPerson: Word('оттеку', 5),
  singular2ndPerson: Word('оттечёшь', 5),
  singular3rdPerson: Word('оттечёт', 5),
  plural1stPerson: Word('оттечём', 5),
  plural2ndPerson: Word('оттечёте', 5),
  plural3rdPerson: Word('оттекут', 5),
  masculinePast: Word('оттёк', 3),
  femininePast: Word('оттекла', 6),
  neuterPast: Word('оттекло', 6),
  pluralPast: Word('оттекли', 6),
  imperativeInformal: Word('оттеки', 5),
  imperativeFormal: Word('оттеките', 5),
  imperfect: [],
};

perfectVerbs.set(оттечь.name.text, оттечь);

export { оттечь };