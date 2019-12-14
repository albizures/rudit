import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const останавливаться: PerfectVerb = {
  name: Word('останавливаться', 5),
  singular1stPerson: Word('останавливаюсь', 5),
  singular2ndPerson: Word('останавливаешься', 5),
  singular3rdPerson: Word('останавливается', 5),
  plural1stPerson: Word('останавливаемся', 5),
  plural2ndPerson: Word('останавливаетесь', 5),
  plural3rdPerson: Word('останавливаются', 5),
  masculinePast: Word('останавливался', 5),
  femininePast: Word('останавливалась', 5),
  neuterPast: Word('останавливалось', 5),
  pluralPast: Word('останавливались', 5),
  imperativeInformal: Word('останавливайся', 5),
  imperativeFormal: Word('останавливайтесь', 5),
  imperfect: ['остановиться'],
};

perfectVerbs.set(останавливаться.name.text, останавливаться);

export { останавливаться };