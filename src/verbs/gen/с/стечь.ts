import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const стечь: PerfectVerb = {
  name: Word('стечь', 2),
  singular1stPerson: Word('стеку', 4),
  singular2ndPerson: Word('стечёшь', 4),
  singular3rdPerson: Word('стечёт', 4),
  plural1stPerson: Word('стечём', 4),
  plural2ndPerson: Word('стечёте', 4),
  plural3rdPerson: Word('стекут', 4),
  masculinePast: Word('стёк', 2),
  femininePast: Word('стекла', 5),
  neuterPast: Word('стекло', 5),
  pluralPast: Word('стекли', 5),
  imperativeInformal: Word('стеки', 4),
  imperativeFormal: Word('стеките', 4),
  imperfect: ['стекать','течь'],
};

perfectVerbs.set(стечь.name.text, стечь);

export { стечь };