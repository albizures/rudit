import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пытаться: PerfectVerb = {
  name: Word('пытаться', 3),
  singular1stPerson: Word('пытаюсь', 3),
  singular2ndPerson: Word('пытаешься', 3),
  singular3rdPerson: Word('пытается', 3),
  plural1stPerson: Word('пытаемся', 3),
  plural2ndPerson: Word('пытаетесь', 3),
  plural3rdPerson: Word('пытаются', 3),
  masculinePast: Word('пытался', 3),
  femininePast: Word('пыталась', 3),
  neuterPast: Word('пыталось', 3),
  pluralPast: Word('пытались', 3),
  imperativeInformal: Word('пытайся', 3),
  imperativeFormal: Word('пытайтесь', 3),
  imperfect: ['попытаться'],
};

perfectVerbs.set(пытаться.name.text, пытаться);

export { пытаться };