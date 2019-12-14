import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пересластить: PerfectVerb = {
  name: Word('пересластить', 9),
  singular1stPerson: Word('переслащу', 8),
  singular2ndPerson: Word('пересластишь', 9),
  singular3rdPerson: Word('пересластит', 9),
  plural1stPerson: Word('пересластим', 9),
  plural2ndPerson: Word('пересластите', 9),
  plural3rdPerson: Word('пересластят', 9),
  masculinePast: Word('пересластил', 9),
  femininePast: Word('пересластила', 9),
  neuterPast: Word('пересластило', 9),
  pluralPast: Word('пересластили', 9),
  imperativeInformal: Word('пересласти', 9),
  imperativeFormal: Word('пересластите', 9),
  imperfect: [],
};

perfectVerbs.set(пересластить.name.text, пересластить);

export { пересластить };