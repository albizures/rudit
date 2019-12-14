import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const взнуздать: PerfectVerb = {
  name: Word('взнуздать', 6),
  singular1stPerson: Word('взнуздаю', 6),
  singular2ndPerson: Word('взнуздаешь', 6),
  singular3rdPerson: Word('взнуздает', 6),
  plural1stPerson: Word('взнуздаем', 6),
  plural2ndPerson: Word('взнуздаете', 6),
  plural3rdPerson: Word('взнуздают', 6),
  masculinePast: Word('взнуздал', 6),
  femininePast: Word('взнуздала', 6),
  neuterPast: Word('взнуздало', 6),
  pluralPast: Word('взнуздали', 6),
  imperativeInformal: Word('взнуздай', 6),
  imperativeFormal: Word('взнуздайте', 6),
  imperfect: [],
};

perfectVerbs.set(взнуздать.name.text, взнуздать);

export { взнуздать };