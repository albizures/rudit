import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поживиться: PerfectVerb = {
  name: Word('поживиться', 5),
  singular1stPerson: Word('поживлюсь', 6),
  singular2ndPerson: Word('поживишься', 5),
  singular3rdPerson: Word('поживится', 5),
  plural1stPerson: Word('поживимся', 5),
  plural2ndPerson: Word('поживитесь', 5),
  plural3rdPerson: Word('поживятся', 5),
  masculinePast: Word('поживился', 5),
  femininePast: Word('поживилась', 5),
  neuterPast: Word('поживилось', 5),
  pluralPast: Word('поживились', 5),
  imperativeInformal: Word('поживись', 5),
  imperativeFormal: Word('поживитесь', 5),
  imperfect: [],
};

perfectVerbs.set(поживиться.name.text, поживиться);

export { поживиться };