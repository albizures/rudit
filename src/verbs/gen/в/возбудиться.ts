import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const возбудиться: PerfectVerb = {
  name: Word('возбудиться', 6),
  singular1stPerson: Word('возбужусь', 6),
  singular2ndPerson: Word('возбудишься', 6),
  singular3rdPerson: Word('возбудится', 6),
  plural1stPerson: Word('возбудимся', 6),
  plural2ndPerson: Word('возбудитесь', 6),
  plural3rdPerson: Word('возбудятся', 6),
  masculinePast: Word('возбудился', 6),
  femininePast: Word('возбудилась', 6),
  neuterPast: Word('возбудилось', 6),
  pluralPast: Word('возбудились', 6),
  imperativeInformal: Word('возбудись', 6),
  imperativeFormal: Word('возбудитесь', 6),
  imperfect: [],
};

perfectVerbs.set(возбудиться.name.text, возбудиться);

export { возбудиться };