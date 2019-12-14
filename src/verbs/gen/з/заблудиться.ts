import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заблудиться: PerfectVerb = {
  name: Word('заблудиться', 6),
  singular1stPerson: Word('заблужусь', 6),
  singular2ndPerson: Word('заблудишься', 4),
  singular3rdPerson: Word('заблудится', 4),
  plural1stPerson: Word('заблудимся', 4),
  plural2ndPerson: Word('заблудитесь', 4),
  plural3rdPerson: Word('заблудятся', 4),
  masculinePast: Word('заблудился', 6),
  femininePast: Word('заблудилась', 6),
  neuterPast: Word('заблудилось', 6),
  pluralPast: Word('заблудились', 6),
  imperativeInformal: Word('заблудись', 6),
  imperativeFormal: Word('заблудитесь', 6),
  imperfect: [],
};

perfectVerbs.set(заблудиться.name.text, заблудиться);

export { заблудиться };