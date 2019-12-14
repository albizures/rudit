import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заряжаться: PerfectVerb = {
  name: Word('заряжаться', 5),
  singular1stPerson: Word('заряжаюсь', 5),
  singular2ndPerson: Word('заряжаешься', 5),
  singular3rdPerson: Word('заряжается', 5),
  plural1stPerson: Word('заряжаемся', 5),
  plural2ndPerson: Word('заряжаетесь', 5),
  plural3rdPerson: Word('заряжаются', 5),
  masculinePast: Word('заряжался', 5),
  femininePast: Word('заряжалась', 5),
  neuterPast: Word('заряжалось', 5),
  pluralPast: Word('заряжались', 5),
  imperativeInformal: Word('заряжайся', 5),
  imperativeFormal: Word('заряжайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(заряжаться.name.text, заряжаться);

export { заряжаться };