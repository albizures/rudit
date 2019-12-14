import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отстранить: PerfectVerb = {
  name: Word('отстранить', 7),
  singular1stPerson: Word('отстраню', 7),
  singular2ndPerson: Word('отстранишь', 7),
  singular3rdPerson: Word('отстранит', 7),
  plural1stPerson: Word('отстраним', 7),
  plural2ndPerson: Word('отстраните', 7),
  plural3rdPerson: Word('отстранят', 7),
  masculinePast: Word('отстранил', 7),
  femininePast: Word('отстранила', 7),
  neuterPast: Word('отстранило', 7),
  pluralPast: Word('отстранили', 7),
  imperativeInformal: Word('отстрани', 7),
  imperativeFormal: Word('отстраните', 7),
  imperfect: [],
};

perfectVerbs.set(отстранить.name.text, отстранить);

export { отстранить };