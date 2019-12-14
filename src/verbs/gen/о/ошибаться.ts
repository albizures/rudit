import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ошибаться: PerfectVerb = {
  name: Word('ошибаться', 4),
  singular1stPerson: Word('ошибаюсь', 4),
  singular2ndPerson: Word('ошибаешься', 4),
  singular3rdPerson: Word('ошибается', 4),
  plural1stPerson: Word('ошибаемся', 4),
  plural2ndPerson: Word('ошибаетесь', 4),
  plural3rdPerson: Word('ошибаются', 4),
  masculinePast: Word('ошибался', 4),
  femininePast: Word('ошибалась', 4),
  neuterPast: Word('ошибалось', 4),
  pluralPast: Word('ошибались', 4),
  imperativeInformal: Word('ошибайся', 4),
  imperativeFormal: Word('ошибайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(ошибаться.name.text, ошибаться);

export { ошибаться };