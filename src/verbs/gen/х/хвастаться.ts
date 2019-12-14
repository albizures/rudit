import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const хвастаться: PerfectVerb = {
  name: Word('хвастаться', 2),
  singular1stPerson: Word('хвастаюсь', 2),
  singular2ndPerson: Word('хвастаешься', 2),
  singular3rdPerson: Word('хвастается', 2),
  plural1stPerson: Word('хвастаемся', 2),
  plural2ndPerson: Word('хвастаетесь', 2),
  plural3rdPerson: Word('хвастаются', 2),
  masculinePast: Word('хвастался', 2),
  femininePast: Word('хвасталась', 2),
  neuterPast: Word('хвасталось', 2),
  pluralPast: Word('хвастались', 2),
  imperativeInformal: Word('хвастайся', 2),
  imperativeFormal: Word('хвастайтесь', 2),
  imperfect: ['похвастаться'],
};

perfectVerbs.set(хвастаться.name.text, хвастаться);

export { хвастаться };