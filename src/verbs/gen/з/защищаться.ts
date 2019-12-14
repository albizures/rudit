import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const защищаться: PerfectVerb = {
  name: Word('защищаться', 5),
  singular1stPerson: Word('защищаюсь', 5),
  singular2ndPerson: Word('защищаешься', 5),
  singular3rdPerson: Word('защищается', 5),
  plural1stPerson: Word('защищаемся', 5),
  plural2ndPerson: Word('защищаетесь', 5),
  plural3rdPerson: Word('защищаются', 5),
  masculinePast: Word('защищался', 5),
  femininePast: Word('защищалась', 5),
  neuterPast: Word('защищалось', 5),
  pluralPast: Word('защищались', 5),
  imperativeInformal: Word('защищайся', 5),
  imperativeFormal: Word('защищайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(защищаться.name.text, защищаться);

export { защищаться };