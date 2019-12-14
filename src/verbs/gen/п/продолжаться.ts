import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const продолжаться: PerfectVerb = {
  name: Word('продолжаться', 7),
  singular1stPerson: Word('продолжаюсь', 7),
  singular2ndPerson: Word('продолжаешься', 7),
  singular3rdPerson: Word('продолжается', 7),
  plural1stPerson: Word('продолжаемся', 7),
  plural2ndPerson: Word('продолжаетесь', 7),
  plural3rdPerson: Word('продолжаются', 7),
  masculinePast: Word('продолжался', 7),
  femininePast: Word('продолжалась', 7),
  neuterPast: Word('продолжалось', 7),
  pluralPast: Word('продолжались', 7),
  imperativeInformal: Word('продолжайся', 7),
  imperativeFormal: Word('продолжайтесь', 7),
  imperfect: ['продолжиться'],
};

perfectVerbs.set(продолжаться.name.text, продолжаться);

export { продолжаться };