import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пригибаться: PerfectVerb = {
  name: Word('пригибаться', 6),
  singular1stPerson: Word('пригибаюсь', 6),
  singular2ndPerson: Word('пригибаешься', 6),
  singular3rdPerson: Word('пригибается', 6),
  plural1stPerson: Word('пригибаемся', 6),
  plural2ndPerson: Word('пригибаетесь', 6),
  plural3rdPerson: Word('пригибаются', 6),
  masculinePast: Word('пригибался', 6),
  femininePast: Word('пригибалась', 6),
  neuterPast: Word('пригибалось', 6),
  pluralPast: Word('пригибались', 6),
  imperativeInformal: Word('пригибайся', 6),
  imperativeFormal: Word('пригибайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(пригибаться.name.text, пригибаться);

export { пригибаться };