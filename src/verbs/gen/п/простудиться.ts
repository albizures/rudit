import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const простудиться: PerfectVerb = {
  name: Word('простудиться', 7),
  singular1stPerson: Word('простужусь', 7),
  singular2ndPerson: Word('простудишься', 5),
  singular3rdPerson: Word('простудится', 5),
  plural1stPerson: Word('простудимся', 5),
  plural2ndPerson: Word('простудитесь', 5),
  plural3rdPerson: Word('простудятся', 5),
  masculinePast: Word('простудился', 7),
  femininePast: Word('простудилась', 7),
  neuterPast: Word('простудилось', 7),
  pluralPast: Word('простудились', 7),
  imperativeInformal: Word('простудись', 7),
  imperativeFormal: Word('простудитесь', 7),
  imperfect: ['простужаться'],
};

perfectVerbs.set(простудиться.name.text, простудиться);

export { простудиться };