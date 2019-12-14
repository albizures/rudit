import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заблагорассудиться: PerfectVerb = {
  name: Word('заблагорассудиться', 11),
  singular1stPerson: Word('заблагорассужусь', 11),
  singular2ndPerson: Word('заблагорассудишься', 11),
  singular3rdPerson: Word('заблагорассудится', 11),
  plural1stPerson: Word('заблагорассудимся', 11),
  plural2ndPerson: Word('заблагорассудитесь', 11),
  plural3rdPerson: Word('заблагорассудятся', 11),
  masculinePast: Word('заблагорассудился', 11),
  femininePast: Word('заблагорассудилась', 11),
  neuterPast: Word('заблагорассудилось', 11),
  pluralPast: Word('заблагорассудились', 11),
  imperativeInformal: Word('заблагорассудься', 11),
  imperativeFormal: Word('заблагорассудьтесь', 11),
  imperfect: [],
};

perfectVerbs.set(заблагорассудиться.name.text, заблагорассудиться);

export { заблагорассудиться };