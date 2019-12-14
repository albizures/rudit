import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перечислить: PerfectVerb = {
  name: Word('перечислить', 5),
  singular1stPerson: Word('перечислю', 5),
  singular2ndPerson: Word('перечислишь', 5),
  singular3rdPerson: Word('перечислит', 5),
  plural1stPerson: Word('перечислим', 5),
  plural2ndPerson: Word('перечислите', 5),
  plural3rdPerson: Word('перечислят', 5),
  masculinePast: Word('перечислил', 5),
  femininePast: Word('перечислила', 5),
  neuterPast: Word('перечислило', 5),
  pluralPast: Word('перечислили', 5),
  imperativeInformal: Word('перечисли', 5),
  imperativeFormal: Word('перечислите', 5),
  imperfect: [],
};

perfectVerbs.set(перечислить.name.text, перечислить);

export { перечислить };