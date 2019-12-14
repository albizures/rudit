import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ярить: PerfectVerb = {
  name: Word('ярить', 2),
  singular1stPerson: Word('ярю', 2),
  singular2ndPerson: Word('яришь', 2),
  singular3rdPerson: Word('ярит', 2),
  plural1stPerson: Word('ярим', 2),
  plural2ndPerson: Word('ярите', 2),
  plural3rdPerson: Word('ярят', 2),
  masculinePast: Word('ярил', 2),
  femininePast: Word('ярила', 2),
  neuterPast: Word('ярило', 2),
  pluralPast: Word('ярили', 2),
  imperativeInformal: Word('яри', 2),
  imperativeFormal: Word('ярите', 2),
  imperfect: [],
};

perfectVerbs.set(ярить.name.text, ярить);

export { ярить };