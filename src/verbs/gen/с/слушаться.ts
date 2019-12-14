import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const слушаться: PerfectVerb = {
  name: Word('слушаться', 2),
  singular1stPerson: Word('слушаюсь', 2),
  singular2ndPerson: Word('слушаешься', 2),
  singular3rdPerson: Word('слушается', 2),
  plural1stPerson: Word('слушаемся', 2),
  plural2ndPerson: Word('слушаетесь', 2),
  plural3rdPerson: Word('слушаются', 2),
  masculinePast: Word('слушался', 2),
  femininePast: Word('слушалась', 2),
  neuterPast: Word('слушалось', 2),
  pluralPast: Word('слушались', 2),
  imperativeInformal: Word('слушайся', 2),
  imperativeFormal: Word('слушайтесь', 2),
  imperfect: ['послушаться'],
};

perfectVerbs.set(слушаться.name.text, слушаться);

export { слушаться };