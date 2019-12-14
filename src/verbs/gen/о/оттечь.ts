import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оттечь: PerfectVerb = {
  name: Word('оттечь', 3),
  singular1stPerson: Word('оттеку', 5),
  singular2ndPerson: Word('оттечёшь', 3),
  singular3rdPerson: Word('оттечёт', 3),
  plural1stPerson: Word('оттечём', 3),
  plural2ndPerson: Word('оттечёте', 3),
  plural3rdPerson: Word('оттекут', 5),
  masculinePast: Word('оттёк', 0),
  femininePast: Word('оттекла', 6),
  neuterPast: Word('оттекло', 6),
  pluralPast: Word('оттекли', 6),
  imperativeInformal: Word('оттеки', 5),
  imperativeFormal: Word('оттеките', 5),
  imperfect: [],
};

perfectVerbs.set(оттечь.name.text, оттечь);

export { оттечь };