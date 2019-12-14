import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const стечь: PerfectVerb = {
  name: Word('стечь', 2),
  singular1stPerson: Word('стеку', 4),
  singular2ndPerson: Word('стечёшь', 2),
  singular3rdPerson: Word('стечёт', 2),
  plural1stPerson: Word('стечём', 2),
  plural2ndPerson: Word('стечёте', 2),
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