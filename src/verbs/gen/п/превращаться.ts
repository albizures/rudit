import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const превращаться: PerfectVerb = {
  name: Word('превращаться', 7),
  singular1stPerson: Word('превращаюсь', 7),
  singular2ndPerson: Word('превращаешься', 7),
  singular3rdPerson: Word('превращается', 7),
  plural1stPerson: Word('превращаемся', 7),
  plural2ndPerson: Word('превращаетесь', 7),
  plural3rdPerson: Word('превращаются', 7),
  masculinePast: Word('превращался', 7),
  femininePast: Word('превращалась', 7),
  neuterPast: Word('превращалось', 7),
  pluralPast: Word('превращались', 7),
  imperativeInformal: Word('превращайся', 7),
  imperativeFormal: Word('превращайтесь', 7),
  imperfect: ['превратиться'],
};

perfectVerbs.set(превращаться.name.text, превращаться);

export { превращаться };