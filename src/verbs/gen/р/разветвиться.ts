import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разветвиться: PerfectVerb = {
  name: Word('разветвиться', 7),
  singular1stPerson: Word('разветвлюсь', 8),
  singular2ndPerson: Word('разветвишься', 7),
  singular3rdPerson: Word('разветвится', 7),
  plural1stPerson: Word('разветвимся', 7),
  plural2ndPerson: Word('разветвитесь', 7),
  plural3rdPerson: Word('разветвятся', 7),
  masculinePast: Word('разветвился', 7),
  femininePast: Word('разветвилась', 7),
  neuterPast: Word('разветвилось', 7),
  pluralPast: Word('разветвились', 7),
  imperativeInformal: Word('разветвись', 7),
  imperativeFormal: Word('разветвитесь', 7),
  imperfect: [],
};

perfectVerbs.set(разветвиться.name.text, разветвиться);

export { разветвиться };