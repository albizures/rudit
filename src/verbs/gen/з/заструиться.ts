import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заструиться: PerfectVerb = {
  name: Word('заструиться', 6),
  singular1stPerson: Word('заструюсь', 6),
  singular2ndPerson: Word('заструишься', 6),
  singular3rdPerson: Word('заструится', 6),
  plural1stPerson: Word('заструимся', 6),
  plural2ndPerson: Word('заструитесь', 6),
  plural3rdPerson: Word('заструятся', 6),
  masculinePast: Word('заструился', 6),
  femininePast: Word('заструилась', 6),
  neuterPast: Word('заструилось', 6),
  pluralPast: Word('заструились', 6),
  imperativeInformal: Word('заструись', 6),
  imperativeFormal: Word('заструитесь', 6),
  imperfect: [],
};

perfectVerbs.set(заструиться.name.text, заструиться);

export { заструиться };