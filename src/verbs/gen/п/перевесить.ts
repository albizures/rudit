import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перевесить: PerfectVerb = {
  name: Word('перевесить', 5),
  singular1stPerson: Word('перевешу', 5),
  singular2ndPerson: Word('перевесишь', 5),
  singular3rdPerson: Word('перевесит', 5),
  plural1stPerson: Word('перевесим', 5),
  plural2ndPerson: Word('перевесите', 5),
  plural3rdPerson: Word('перевесят', 5),
  masculinePast: Word('перевесил', 5),
  femininePast: Word('перевесила', 5),
  neuterPast: Word('перевесило', 5),
  pluralPast: Word('перевесили', 5),
  imperativeInformal: Word('перевесь', 5),
  imperativeFormal: Word('перевесьте', 5),
  imperfect: [],
};

perfectVerbs.set(перевесить.name.text, перевесить);

export { перевесить };