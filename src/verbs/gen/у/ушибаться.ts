import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ушибаться: PerfectVerb = {
  name: Word('ушибаться', 4),
  singular1stPerson: Word('ушибаюсь', 4),
  singular2ndPerson: Word('ушибаешься', 4),
  singular3rdPerson: Word('ушибается', 4),
  plural1stPerson: Word('ушибаемся', 4),
  plural2ndPerson: Word('ушибаетесь', 4),
  plural3rdPerson: Word('ушибаются', 4),
  masculinePast: Word('ушибался', 4),
  femininePast: Word('ушибалась', 4),
  neuterPast: Word('ушибалось', 4),
  pluralPast: Word('ушибались', 4),
  imperativeInformal: Word('ушибайся', 4),
  imperativeFormal: Word('ушибайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(ушибаться.name.text, ушибаться);

export { ушибаться };