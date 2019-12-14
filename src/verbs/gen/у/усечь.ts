import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const усечь: PerfectVerb = {
  name: Word('усечь', 2),
  singular1stPerson: Word('усеку', 4),
  singular2ndPerson: Word('усечёшь', 4),
  singular3rdPerson: Word('усечёт', 4),
  plural1stPerson: Word('усечём', 4),
  plural2ndPerson: Word('усечёте', 4),
  plural3rdPerson: Word('усекут', 4),
  masculinePast: Word('усёк', 2),
  femininePast: Word('усекла', 5),
  neuterPast: Word('усекло', 5),
  pluralPast: Word('усекли', 5),
  imperativeInformal: Word('усеки', 4),
  imperativeFormal: Word('усеките', 4),
  imperfect: ['усекать'],
};

perfectVerbs.set(усечь.name.text, усечь);

export { усечь };