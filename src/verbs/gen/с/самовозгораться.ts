import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const самовозгораться: PerfectVerb = {
  name: Word('самовозгораться', 10),
  singular1stPerson: Word('самовозгораюсь', 10),
  singular2ndPerson: Word('самовозгораешься', 10),
  singular3rdPerson: Word('самовозгорается', 10),
  plural1stPerson: Word('самовозгораемся', 10),
  plural2ndPerson: Word('самовозгораетесь', 10),
  plural3rdPerson: Word('самовозгораются', 10),
  masculinePast: Word('самовозгорался', 10),
  femininePast: Word('самовозгоралась', 10),
  neuterPast: Word('самовозгоралось', 10),
  pluralPast: Word('самовозгорались', 10),
  imperativeInformal: Word('самовозгорайся', 10),
  imperativeFormal: Word('самовозгорайтесь', 10),
  imperfect: [],
};

perfectVerbs.set(самовозгораться.name.text, самовозгораться);

export { самовозгораться };