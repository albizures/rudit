import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пробродить: PerfectVerb = {
  name: Word('пробродить', 7),
  singular1stPerson: Word('проброжу', 7),
  singular2ndPerson: Word('пробродишь', 5),
  singular3rdPerson: Word('пробродит', 5),
  plural1stPerson: Word('пробродим', 5),
  plural2ndPerson: Word('пробродите', 5),
  plural3rdPerson: Word('пробродят', 5),
  masculinePast: Word('пробродил', 7),
  femininePast: Word('пробродила', 7),
  neuterPast: Word('пробродило', 7),
  pluralPast: Word('пробродили', 7),
  imperativeInformal: Word('проброди', 7),
  imperativeFormal: Word('пробродите', 7),
  imperfect: [],
};

perfectVerbs.set(пробродить.name.text, пробродить);

export { пробродить };