import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const придвигаться: PerfectVerb = {
  name: Word('придвигаться', 7),
  singular1stPerson: Word('придвигаюсь', 7),
  singular2ndPerson: Word('придвигаешься', 7),
  singular3rdPerson: Word('придвигается', 7),
  plural1stPerson: Word('придвигаемся', 7),
  plural2ndPerson: Word('придвигаетесь', 7),
  plural3rdPerson: Word('придвигаются', 7),
  masculinePast: Word('придвигался', 7),
  femininePast: Word('придвигалась', 7),
  neuterPast: Word('придвигалось', 7),
  pluralPast: Word('придвигались', 7),
  imperativeInformal: Word('придвигайся', 7),
  imperativeFormal: Word('придвигайтесь', 7),
  imperfect: [],
};

perfectVerbs.set(придвигаться.name.text, придвигаться);

export { придвигаться };