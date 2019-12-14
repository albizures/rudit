import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const чудиться: PerfectVerb = {
  name: Word('чудиться', 1),
  singular1stPerson: Word('чужусь', 1),
  singular2ndPerson: Word('чудишься', 1),
  singular3rdPerson: Word('чудится', 1),
  plural1stPerson: Word('чудимся', 1),
  plural2ndPerson: Word('чудитесь', 1),
  plural3rdPerson: Word('чудятся', 1),
  masculinePast: Word('чудился', 1),
  femininePast: Word('чудилась', 1),
  neuterPast: Word('чудилось', 1),
  pluralPast: Word('чудились', 1),
  imperativeInformal: Word('чудься', 1),
  imperativeFormal: Word('чудьтесь', 1),
  imperfect: [],
};

perfectVerbs.set(чудиться.name.text, чудиться);

export { чудиться };