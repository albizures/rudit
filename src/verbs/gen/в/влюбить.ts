import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const влюбить: PerfectVerb = {
  name: Word('влюбить', 4),
  singular1stPerson: Word('влюблю', 5),
  singular2ndPerson: Word('влюбишь', 2),
  singular3rdPerson: Word('влюбит', 2),
  plural1stPerson: Word('влюбим', 2),
  plural2ndPerson: Word('влюбите', 2),
  plural3rdPerson: Word('влюбят', 2),
  masculinePast: Word('влюбил', 4),
  femininePast: Word('влюбила', 4),
  neuterPast: Word('влюбило', 4),
  pluralPast: Word('влюбили', 4),
  imperativeInformal: Word('влюби', 4),
  imperativeFormal: Word('влюбите', 4),
  imperfect: [],
};

perfectVerbs.set(влюбить.name.text, влюбить);

export { влюбить };