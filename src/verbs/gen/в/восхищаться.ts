import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const восхищаться: PerfectVerb = {
  name: Word('восхищаться', 6),
  singular1stPerson: Word('восхищаюсь', 6),
  singular2ndPerson: Word('восхищаешься', 6),
  singular3rdPerson: Word('восхищается', 6),
  plural1stPerson: Word('восхищаемся', 6),
  plural2ndPerson: Word('восхищаетесь', 6),
  plural3rdPerson: Word('восхищаются', 6),
  masculinePast: Word('восхищался', 6),
  femininePast: Word('восхищалась', 6),
  neuterPast: Word('восхищалось', 6),
  pluralPast: Word('восхищались', 6),
  imperativeInformal: Word('восхищайся', 6),
  imperativeFormal: Word('восхищайтесь', 6),
  imperfect: ['восхититься'],
};

perfectVerbs.set(восхищаться.name.text, восхищаться);

export { восхищаться };