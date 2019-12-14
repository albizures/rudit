import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прогибаться: PerfectVerb = {
  name: Word('прогибаться', 6),
  singular1stPerson: Word('прогибаюсь', 6),
  singular2ndPerson: Word('прогибаешься', 6),
  singular3rdPerson: Word('прогибается', 6),
  plural1stPerson: Word('прогибаемся', 6),
  plural2ndPerson: Word('прогибаетесь', 6),
  plural3rdPerson: Word('прогибаются', 6),
  masculinePast: Word('прогибался', 6),
  femininePast: Word('прогибалась', 6),
  neuterPast: Word('прогибалось', 6),
  pluralPast: Word('прогибались', 6),
  imperativeInformal: Word('прогибайся', 6),
  imperativeFormal: Word('прогибайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(прогибаться.name.text, прогибаться);

export { прогибаться };