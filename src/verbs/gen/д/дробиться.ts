import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const дробиться: PerfectVerb = {
  name: Word('дробиться', 4),
  singular1stPerson: Word('дроблюсь', 5),
  singular2ndPerson: Word('дробишься', 4),
  singular3rdPerson: Word('дробится', 4),
  plural1stPerson: Word('дробимся', 4),
  plural2ndPerson: Word('дробитесь', 4),
  plural3rdPerson: Word('дробятся', 4),
  masculinePast: Word('дробился', 4),
  femininePast: Word('дробилась', 4),
  neuterPast: Word('дробилось', 4),
  pluralPast: Word('дробились', 4),
  imperativeInformal: Word('дробись', 4),
  imperativeFormal: Word('дробитесь', 4),
  imperfect: [],
};

perfectVerbs.set(дробиться.name.text, дробиться);

export { дробиться };